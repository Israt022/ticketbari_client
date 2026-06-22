import AdvertisementSection from "@/components/homepage/AdvertisementSection";
import Banner from "@/components/homepage/Banner";
import LatestTicketsSection from "@/components/homepage/LatestTicketsSection";
import PopularRoutes from "@/components/homepage/PopularRoutes";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import { getAdvertiseTickets, getTickets } from "@/lib/api/ticket";
import Image from "next/image";

export default async function Home() {
  const advertiseTicket = await getAdvertiseTickets();
  const latestTicket = await getTickets();
  return (
    <div className="space-y-16">
      <Banner />

      {/* advertise */}
      <AdvertisementSection tickets={advertiseTicket} />

      {/* latest */}
      <LatestTicketsSection tickets={latestTicket} />

      {/* popular */}
      <PopularRoutes />

      {/* why chose */}
      <WhyChooseUs />
    </div>
  );
}
