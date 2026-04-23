import {FC, memo} from 'react';

import Page from '../components/Layout/Page';

const Game: FC = memo(() => (
  <Page description="Play my Western Themed Platform Shooter game built with Godot" title="Game | Sam Hoekwater">
    <div className="flex h-screen w-full items-center justify-center bg-neutral-900">
      <div className="aspect-[1152/648] w-full max-w-[1152px]">
        <iframe
          allowFullScreen
          className="h-full w-full"
          src="/game/OutlawKev_v4.4.1-stable_win64.exe.html"
          title="Western Themed Platform Shooter Game"
        />
      </div>
    </div>
  </Page>
));

Game.displayName = 'Game';
export default Game;
