import { restaurant } from "../data";

export default function WhatsappButton() {
  return <a className="whatsapp" href={restaurant.whatsapp} target="_blank" rel="noreferrer" aria-label="Contactar a Puerto 23 por WhatsApp">WhatsApp</a>;
}
