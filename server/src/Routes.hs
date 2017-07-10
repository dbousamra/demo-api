{-# LANGUAGE OverloadedStrings #-}

module Routes (
  routes
) where

import qualified Data.Text as T
import Data.Aeson (Value, (.=), object)
import Database.PostgreSQL.Simple
import Web.Scotty
import Network.Wai (Middleware)
import Network.Wai.Middleware.RequestLogger (logStdoutDev)
import Network.HTTP.Types.Status
import Types
import Json

loggingM :: Middleware
loggingM = logStdoutDev

defaultH :: Error -> ActionM ()
defaultH e = do
  status internalServerError500
  json $ object ["error" .= e]

fallback :: ScottyM ()
fallback = notFound $ status notFound404

health :: ActionM ()
health = status ok200

createDemoRequest :: ActionM ()
createDemoRequest = do
  dr <- jsonData :: ActionM DemoRequest
  json dr

routes :: Connection -> ScottyM ()
routes conn = do
  -- Setup
  defaultHandler defaultH
  middleware loggingM
  -- Routes
  get  "/health" $ health
  post "/demorequest" $ createDemoRequest
  -- What to do if all the routes above fail
  fallback