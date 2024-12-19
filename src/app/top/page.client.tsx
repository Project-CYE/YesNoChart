"use client";

import HomeCard from "@/components/card/card";

const TopPage = () => {
  const buttons = [
    { url: "/minecraft", label: "minecraft" },
    { url: "/others/1stBranch", label: "建築でのルール" },
    { url: "/others/1stBranch", label: "サーバーでのルール" },
    { url: "/others/1stBranch", label: "その他" },
  ];

  return (
    <HomeCard
      title={"CYE ヘルプページへようこそ"}
      subTitle={"サポートが必要な項目をお選びください"}
      buttons={buttons}
    />
  );
};

export default TopPage;
