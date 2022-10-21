import rateLimit from "express-rate-limit";

export const loginLimited = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 min
    max: 5,
    message: 'Too many account logins from this IP, please try again after an 10 minutes'
})
