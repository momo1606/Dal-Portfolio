//Author: Hatim Patrawala

import Joi from "joi";

export const validateCreatePortfolio = (body) => {
  const schema = Joi.object({
    configuration: Joi.object({
      name: Joi.string().min(3).required(),
      color: Joi.string().required(),
    }),
    bio: Joi.object({
      first_name: Joi.string().min(3).required(),
      last_name: Joi.string().min(3).required(),
      email: Joi.string().email().min(3).required(),
      phone: Joi.string().default("").allow(null, ""),
      address: Joi.string().default("").allow(null, ""),
      city: Joi.string().default("").allow(null, ""),
      country: Joi.string().default("").allow(null, ""),
      about: Joi.string().default("").allow(null, ""),
      github: Joi.string().default("").allow(null, ""),
      linkedin: Joi.string().default("").allow(null, ""),
      twitter: Joi.string().default("").allow(null, ""),
      facebook: Joi.string().default("").allow(null, ""),
      instagram: Joi.string().default("").allow(null, ""),
      youtube: Joi.string().default("").allow(null, ""),
      gscholar: Joi.string().default("").allow(null, ""),
      other_url: Joi.string().default("").allow(null, ""),
      photo_url: Joi.string().default("").allow(null, ""),
    }),
    education: Joi.array().items(
      Joi.object({
        degree: Joi.string().required(),
        field_of_study: Joi.string().required(),
        university: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        grade_obtained: Joi.string().default("").allow(null, ""),
        max_grade: Joi.string().default("").allow(null, ""),
        description: Joi.string().default("").allow(null, ""),
      })
    ),
    experience: Joi.array().items(
      Joi.object({
        company_name: Joi.string().required(),
        role: Joi.string().required(),
        location: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        company_url: Joi.string().default("").allow(null, ""),
        description: Joi.string().default("").allow(null, ""),
      })
    ),
    projects: Joi.array().items(
      Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        status: Joi.string().valid("completed", "in_progress").required(),
        project_url: Joi.string().default("").allow(null, ""),
      })
    ),
    skills: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        rating: Joi.number().less(6).greater(0).required(),
      })
    ),
    certifications: Joi.array().items(
      Joi.object({
        title: Joi.string().required(),
        issuer: Joi.string().required(),
        issue_date: Joi.date().required(),
        expiry_date: Joi.date().default("").allow(null, ""),
        verification_link: Joi.string().required(),
      })
    ),
    resume: Joi.string().default("").allow(null, ""),
		is_default: Joi.boolean().default(false),
  });
  return schema.validate(body);
};
