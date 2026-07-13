-- ============================================================
-- EHKC Website — MySQL schema (replaces Supabase/Postgres schema)
-- Run this once in phpMyAdmin (Import tab) or the SQL tab.
-- Character set utf8mb4 to support Chinese text fields.
-- ============================================================

SET NAMES utf8mb4;

-- ---------------------------------------------------------------
-- users: replaces Supabase auth.users (email + password login)
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id            CHAR(36)      NOT NULL PRIMARY KEY,
  email         VARCHAR(255)  NOT NULL UNIQUE,
  password_hash VARCHAR(255)  NOT NULL,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------
-- profiles: replaces public.profiles (auto-created on signup)
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
  id          CHAR(36)     NOT NULL PRIMARY KEY,
  email       VARCHAR(255),
  name        VARCHAR(255),
  role        VARCHAR(50)  DEFAULT 'user',
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_profiles_user FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------
-- jobs
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS jobs (
  id          CHAR(36)     NOT NULL PRIMARY KEY,
  title_en    VARCHAR(255) NOT NULL,
  title_zh    VARCHAR(255),
  type        VARCHAR(50)  DEFAULT 'Full-Time',
  location    VARCHAR(255) DEFAULT 'Old Klang Road, Kuala Lumpur',
  salary      VARCHAR(100),
  wa          VARCHAR(50)  DEFAULT '60127762911',
  desc_en     TEXT,
  desc_zh     TEXT,
  posted      DATE         DEFAULT (CURRENT_DATE),
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------
-- applications
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS applications (
  id          CHAR(36)     NOT NULL PRIMARY KEY,
  job_id      CHAR(36),
  job_title   VARCHAR(255),
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  phone       VARCHAR(50),
  message     TEXT,
  cv_name     VARCHAR(255),
  cv_path     VARCHAR(500),
  status      VARCHAR(50)  DEFAULT 'new',
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_app_job FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------
-- posts (blog / news)
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS posts (
  id          CHAR(36)     NOT NULL PRIMARY KEY,
  title_en    VARCHAR(255) NOT NULL,
  title_zh    VARCHAR(255),
  category    VARCHAR(100) DEFAULT 'News',
  event_date  DATE,
  content     TEXT,
  content_zh  TEXT,
  link        VARCHAR(500),
  image_path  VARCHAR(500),
  posted      DATE         DEFAULT (CURRENT_DATE),
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------
-- gallery
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS gallery (
  id          CHAR(36)     NOT NULL PRIMARY KEY,
  src         VARCHAR(500) NOT NULL,
  caption     VARCHAR(500),
  sort_order  INT          DEFAULT 0,
  posted      DATE         DEFAULT (CURRENT_DATE),
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------
-- Seed an admin user (CHANGE the email/password after import!)
-- Password below is a placeholder hash for "ChangeMe123" — replace
-- by running php tools/hash_password.php locally, or just sign up
-- through signup.html then manually UPDATE profiles SET role='admin'
-- WHERE email='you@example.com';
-- ---------------------------------------------------------------
