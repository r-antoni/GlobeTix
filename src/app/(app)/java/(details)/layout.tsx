import Header from "@/components/Shared/Fragments/Header";
import MonasProvider from "@/context/MonasContext";

export default function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <div className="pt-20 px-10 bg-[#f5f5f5] overflow-y-hidden">
        <MonasProvider>{children}</MonasProvider>
      </div>
    </div>
  );
}
