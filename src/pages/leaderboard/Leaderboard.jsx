import React from "react";
import "./leaderboard.scss";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { LeaderboardCard } from "../../components/leaderboardCard/LeaderboardCard";

export const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <Navbar2 pageName={"create Quiz > Leaderboard"} />
      <div className="container">
        <div className="top">
          <h1>Quiz Result</h1>
        </div>
        <div className="bottom">
          <LeaderboardCard
            rank={"Rank"}
            score={"Score"}
            name={"User Name"}
            time={"Time taken"}
          />
          <LeaderboardCard
            rank={1}
            score={10}
            name={"Ankit"}
            time={"00:01:00"}
          />
          <LeaderboardCard
            rank={1}
            score={10}
            name={"Ankit"}
            time={"00:01:00"}
          />
          <LeaderboardCard
            rank={1}
            score={10}
            name={"Ankit"}
            time={"00:01:00"}
          />
          <LeaderboardCard
            rank={1}
            score={10}
            name={"Ankit"}
            time={"00:01:00"}
          />
          <LeaderboardCard
            rank={1}
            score={10}
            name={"Ankit"}
            time={"00:01:00"}
          />
          <LeaderboardCard
            rank={1}
            score={10}
            name={"Ankit"}
            time={"00:01:00"}
          />
        </div>
      </div>
    </div>
  );
};
