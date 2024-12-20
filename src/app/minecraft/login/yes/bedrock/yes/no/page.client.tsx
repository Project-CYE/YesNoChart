"use client";

import Background from "@/components/background/background";
import HomeCard from "@/components/card/card";

const Minecraft6thBranchLoginYesBedrockYesNoPage = () => {
  const buttons = [
    { url: "https://discord.gg/ShsksD7k", label: "Discordチャンネル" },
  ];

  return (
    <Background>
      <HomeCard
        title={"ホワイトリスト手続きが必要です"}
        subTitle={"以下の手順に則って設定してください。"}
        buttons={buttons}
      />
    </Background>
  );
};

export default Minecraft6thBranchLoginYesBedrockYesNoPage;
