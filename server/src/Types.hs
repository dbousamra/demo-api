{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric #-}

module Types where
import GHC.Generics
import qualified Data.Text as T
import qualified Data.Text.Lazy as L

type Error = L.Text

data CSGORank
  = SI
  | SII
  | SIII
  | SE
  | SEM
  | GN1
  | GNII
  | GNIII
  | GNM
  | MGI
  | MGII
  | MGE
  | DMG
  | LE
  | LEM
  | SMFC
  | GE
  deriving (Show, Eq, Generic)

-- API requests
data DemoRequest = DemoRequest {
  dPlayerName :: T.Text,
  dDemoUrl :: T.Text,
  dComments :: T.Text,
  dRank :: Maybe CSGORank,
  dRoundsOfInterest :: [Int]
} deriving (Show, Eq)

data PlayerRating = PlayerRating {
  prCcore :: Int,
  prComments :: Maybe T.Text
} deriving (Show, Eq)

data PlayerRatings = PlayerRatings {
  prsEconomyManagement :: PlayerRating,
  prsCrosshairPositioning :: PlayerRating
} deriving (Show, Eq)

data RoundComment = RoundComment {
  rcRound :: Int,
  rcComments :: T.Text
} deriving (Show, Eq)

data DemoReview = DemoReview {
  drGeneralComments :: T.Text,
  drRatings :: PlayerRatings,
  roundComments :: [RoundComment]
} deriving (Show, Eq)