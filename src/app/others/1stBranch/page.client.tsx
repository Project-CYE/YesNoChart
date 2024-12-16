"use client";

import HomeCard from "@/components/card/card";

const Others1stBranchPage = () => {
  const buttons = [
    { url: "https://discord.gg/eqDmvagV", label: "Discordチャンネル" },
  ];

  return (
    <HomeCard
      title={"運営部にご相談ください"}
      subTitle={
        "お問い合わせチャンネルにて、サポートが必要な内容をお問い合わせください。\n@運営部 メンションがあれば対応が早くなります。"
      }
      buttons={buttons}
    />
  );
};

export default Others1stBranchPage;
