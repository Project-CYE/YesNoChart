"use client";

import Background from "@/components/background/background";
import HomeCard from "@/components/card/card";

const Minecraft4thBranchLoginYesBedrockPage = () => {
  const buttons = [
    { url: "/minecraft/login/yes/bedrock/yes", label: "はい" },
    { url: "/others/1stBranch", label: "いいえ" },
  ];

  return (
    <Background>
      <HomeCard
        title={"サーバーアドレスを確認しましたか？"}
        subTitle={"当てはまる解答をお選びください"}
        buttons={buttons}
      />
    </Background>
  );
};

export default Minecraft4thBranchLoginYesBedrockPage;
