import Header from "@/components/Shared/Fragments/Header";
import MonasProvider from "@/context/MonasContext";

export default function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <div className="">
        <MonasProvider>{children}</MonasProvider>
      </div>
    </div>
  );
}
