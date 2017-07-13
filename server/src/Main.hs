{-# LANGUAGE OverloadedStrings #-}

module Main where

import Data.Word
import Web.Scotty
import System.Environment (getEnv)
import Database.PostgreSQL.Simple
import Routes (routes)

main :: IO ()
main = do
  -- conn <- getConn
  scotty 8080 $ routes undefined

getConn :: IO Connection
getConn = do
  host     <- getEnv "DB_HOST"
  port     <- getEnv "DB_PORT"
  user     <- getEnv "DB_USERNAME"
  password <- getEnv "DB_PASSWORD"
  dbName   <- getEnv "DB_NAME"
  connect $ ConnectInfo host (read port) user password dbName
