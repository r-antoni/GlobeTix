import Header from "@/components/Shared/Fragments/Header";
import BaliZooProvider from "@/context/BaliZooContext";

export default function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <BaliZooProvider>
          {children}
      </BaliZooProvider>
    </div>
  );
}
