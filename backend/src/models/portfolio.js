//Author: Hatim Patrawala

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const configurationSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    _id: false,
  }
);

const bioSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    about: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    youtube: { type: String },
    gscholar: { type: String },
    other_url: { type: String },
    photo_url: { type: String },
  },
  {
    _id: false,
  }
);

const educationSchema = new Schema(
  {
    degree: { type: String, required: true },
    field_of_study: { type: String, required: true },
    university: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    grade_obtained: { type: String },
    max_grade: { type: String },
    description: { type: String },
  },
  {
    _id: false,
  }
);

const experienceSchema = new Schema(
  {
    company_name: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    company_url: { type: String },
    description: { type: String },
  },
  {
    _id: false,
  }
);

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["completed", "in-progress"],
      required: true,
    },
    project_url: { type: String },
  },
  {
    _id: false,
  }
);

const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    _id: false,
  }
);

const certificationSchema = new Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    issue_date: { type: Date, required: true },
    expiry_date: { type: Date },
    verification_link: { type: String },
  },
  {
    _id: false,
  }
);

const portfolioSchema = new Schema(
  {
    configuration: {
      type: configurationSchema,
      required: true,
    },
    bio: {
      type: bioSchema,
      required: true,
    },
    education: {
      type: [educationSchema],
      required: true,
    },
    experience: {
      type: [experienceSchema],
      required: true,
    },
    projects: {
      type: [projectSchema],
      required: true,
    },
    skills: {
      type: [skillSchema],
      required: true,
    },
    certifications: {
      type: [certificationSchema],
      required: true,
    },
    resume: {
      type: String,
    },
    is_default: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    collection: "portfolios",
  }
);

const Portfolio = model("Portfolio", portfolioSchema);

export default Portfolio;
