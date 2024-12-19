"use client";

import HomeCard from "@/components/card/card";

const Minecraft1stBranchPage = () => {
  const buttons = [
    { url: "/minecraft/login", label: "サーバーに入れない" },
    { url: "/others/1stBranch", label: "バージョンを知りたい" },
    { url: "/others/1stBranch", label: "アドレスを知りたい" },
    { url: "/others/1stBranch", label: "その他" },
  ];

  return (
    <HomeCard
      title={"minecraftに関するヘルプ"}
      subTitle={"サポートが必要な項目をお選びください"}
      buttons={buttons}
    />
  );
};

export default Minecraft1stBranchPage;
