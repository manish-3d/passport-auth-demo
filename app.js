const express = require("express");
const path = require("node:path");
const bcrypt = require("bcryptjs");

const session = require("express-session");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("./db/pool");

const app = express();

/* ---------------- PASSPORT CONFIG ---------------- */

