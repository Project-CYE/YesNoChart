"use client";

import HomeCard from "@/components/card/card";

const Minecraft3ndBranchLoginYesPage = () => {
  const buttons = [
    { url: "/others/1stBranch", label: "JavaEdition" },
    {
      url: "/minecraft/4thBranch/login/yes/bedrock",
      label: "BedrockEdition(統合版)",
    },
  ];

  return (
    <HomeCard
      title={"お使いのソフトを選択してください。"}
      subTitle={"当てはまる解答をお選びください"}
      buttons={buttons}
    />
  );
};

export default Minecraft3ndBranchLoginYesPage;
