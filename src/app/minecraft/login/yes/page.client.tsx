"use client";

import Background from "@/components/background/background";
import HomeCard from "@/components/card/card";

const Minecraft3ndBranchLoginYesPage = () => {
  const buttons = [
    { url: "/others/1stBranch", label: "JavaEdition" },
    {
      url: "/minecraft/login/yes/bedrock",
      label: "BedrockEdition(統合版)",
    },
  ];

  return (
    <Background>
      <HomeCard
        title={"お使いのソフトを選択してください。"}
        subTitle={"当てはまる解答をお選びください"}
        buttons={buttons}
      />
    </Background>
  );
};

export default Minecraft3ndBranchLoginYesPage;
