{-# LANGUAGE OverloadedStrings #-}

module Main where

import Web.Scotty
import Routes (routes)

main :: IO ()
main = scotty 8080 $ routes