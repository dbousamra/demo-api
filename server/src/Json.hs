{-# LANGUAGE OverloadedStrings #-}

module Json where

import qualified Data.Text as T
import qualified Data.Text.Lazy as L
import           Data.Aeson
import           Types

instance FromJSON CSGORank
instance ToJSON CSGORank

instance FromJSON DemoRequest where
  parseJSON = withObject "DemoRequest" $ \v -> DemoRequest
    <$> v .: "playerName"
    <*> v .: "demoUrl"
    <*> v .: "comments"
    <*> v .: "rank"
    <*> v .: "roundsOfInterest"

instance ToJSON DemoRequest where
  toJSON (DemoRequest pn durl c rank roi) = object [
      "playerName" .= pn,
      "demoUrl" .= durl,
      "comments" .= c,
      "rank" .= rank,
      "roundsOfInterest" .= roi
    ]