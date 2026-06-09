
import Dessert from "@/components/Patches Pages/Dragdata";
import MainCours from "@/components/Patches Pages/quality&pricing";
import StarterMenu from "@/components/Patches Pages/inventry";
import PartnersAndClients from "@/components/Patches Pages/PartnerClient";
import Hero from "@/components/Patches Pages/patcheshero";
import FAQSection from "@/components/Patches Pages/FAQSection";
import LeatherPatchesDetails from "@/components/Patches Pages/leatherpatches";
import ShippingMap from "@/components/Patches Pages/last";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <LeatherPatchesDetails  />
  <Dessert/>
  <PartnersAndClients/>
  <FAQSection/>
  <ShippingMap/>
</div>
  );
}