import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID ={
    'seeker_pro': 'price_1TiL6J0G1HjeFDJBHYbRldE5',
    'seeker_premium': 'price_1TiRCe0G1HjeFDJBFa9fKAtp',
    'recruiter_enterprise': 'price_1TiRAy0G1HjeFDJB6N64N9Xg',
    'recruiter_growth':'price_1TiRBo0G1HjeFDJBBcyXJm4c',
}