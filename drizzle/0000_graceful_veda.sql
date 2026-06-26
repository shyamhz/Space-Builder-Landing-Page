CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" varchar(255) NOT NULL,
	"mobile" varchar(50) NOT NULL,
	"social_link" text,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
