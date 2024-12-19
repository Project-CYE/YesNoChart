"use client";

import HomeCard from "@/components/card/card";

const Minecraft4thBranchLoginYesBedrockPage = () => {
  const buttons = [
    { url: "/minecraft/5thBranch/login/yes/bedrock/yes", label: "はい" },
    { url: "/others/1stBranch", label: "いいえ" },
  ];

  return (
    <HomeCard
      title={"サーバーアドレスを確認しましたか？"}
      subTitle={"当てはまる解答をお選びください"}
      buttons={buttons}
    />
  );
};

export default Minecraft4thBranchLoginYesBedrockPage;
