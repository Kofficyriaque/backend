from mysql.connector import pooling
from contextlib import contextmanager
import os
from dotenv import load_dotenv
load_dotenv()

DB_CONFIG = {
    "host":os.getenv("HOST"),
	"port":int(os.getenv("PORT")),
	"user":os.getenv("USER"),
	"password":os.getenv("PASSWORD"),
	"database":os.getenv("DATABASE"),
    "charset":os.getenv("CHARSET"),
    "collation":os.getenv("COLLATION"),
    "ssl_disabled":bool(os.getenv("SSL_DISABLED")),
    "ssl_verify_cert":bool(os.getenv("SSL_VERIFY_CERT"))
} #charger configuration de la database

class Database:
    _pool = None
    
    @classmethod
    def get_pool(cls):
        if cls._pool is None:
            cls._pool = pooling.MySQLConnectionPool(
                pool_name="salary_pool",
                pool_size=5,
                pool_reset_session=True,
                **DB_CONFIG
            )
        return cls._pool
    
    @classmethod
    @contextmanager
    def get_cursor(cls):
        conn = cls.get_pool().get_connection()
        cursor = conn.cursor(dictionary=True, buffered=True)
        try:
            yield cursor, conn
        finally:
            cursor.close()
            conn.close()
    
    @classmethod
    def execute(cls, query: str, params: tuple = None) -> int:
        with cls.get_cursor() as (cursor, conn):
            cursor.execute(query, params)
            conn.commit()
            return cursor.lastrowid
    
    @classmethod
    def fetch_one(cls, query: str, params: tuple = None) -> dict:
        with cls.get_cursor() as (cursor, _):
            cursor.execute(query, params)
            return cursor.fetchone()
    
    @classmethod
    def fetch_all(cls, query: str, params: tuple = None) -> list:
        with cls.get_cursor() as (cursor, _):
            cursor.execute(query, params)
            return cursor.fetchall()
        
print(DB_CONFIG)