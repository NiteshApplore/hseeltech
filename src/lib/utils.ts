import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const industryUrls = {
  "Real Estate": "/industries/real-estate",
  "Retail & E-Commerce": "/industries/retail-ecommerce",
  "Healthcare": "/industries/healthcare",
  "BFSI": "/industries/bfsi",
  "Insurance": "/industries/insurance",
  "Education (EdTech)": "/industries/education-edtech",
  "Telecom": "/industries/telecom",
  "Hospitality": "/industries/hospitality",
  "Logistics & Delivery": "/industries/logistics-and-delivery",
  "Travel & Tourism": "/industries/travel-and-tourism"
};
