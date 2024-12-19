"use client";

import HomeCard from "@/components/card/card";

const Minecraft6thBranchLoginYesBedrockYesNoPage = () => {
  const buttons = [
    { url: "https://discord.gg/ShsksD7k", label: "Discordチャンネル" },
  ];

  return (
    <HomeCard
      title={"ホワイトリスト手続きが必要です"}
      subTitle={"以下の手順に則って設定してください。"}
      buttons={buttons}
    />
  );
};

export default Minecraft6thBranchLoginYesBedrockYesNoPage;
