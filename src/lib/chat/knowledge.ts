import { DIVISIONS } from "@/data/divisions";
import { PRODUCTS } from "@/data/products";
import { SERVICES } from "@/data/services";

export function buildKnowledgeContext(): string {
  const divisions = DIVISIONS.map(
    (division) => `${division.name}: ${division.description} Focus: ${division.focus.join(", ")}.`
  ).join("\n");
  const services = SERVICES.map((service) => `${service.category}: ${service.description}`).join("\n");
  const products = PRODUCTS.map(
    (product) => `${product.name} (${product.division}): ${product.description}`
  ).join("\n");

  return `Trusted NextAura website knowledge:\n${divisions}\nServices:\n${services}\nProducts:\n${products}`;
}
