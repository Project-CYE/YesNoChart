"use client";

import HomeCard from "@/components/card/card";

const Minecraft2ndBranchLoginPage = () => {
  const buttons = [
    { url: "/minecraft/3ndBranch/login/yes", label: "はい" },
    { url: "/others/1stBranch", label: "いいえ" },
  ];

  return (
    <HomeCard
      title={"サーバーに入るのは初めてですか？"}
      subTitle={"当てはまる解答をお選びください"}
      buttons={buttons}
    />
  );
};

export default Minecraft2ndBranchLoginPage;
