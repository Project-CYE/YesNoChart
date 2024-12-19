"use client";

import HomeCard from "@/components/card/card";

const Minecraft5thBranchLoginYesBedrockyesPage = () => {
  const buttons = [
    { url: "/others/1stBranch", label: "はい" },
    { url: "/minecraft/login/yes/bedrock/yes/no", label: "いいえ" },
  ];

  return (
    <HomeCard
      title={"ホワイトリスト手続きを行いましたか？"}
      subTitle={"当てはまる解答をお選びください"}
      buttons={buttons}
    />
  );
};

export default Minecraft5thBranchLoginYesBedrockyesPage;
