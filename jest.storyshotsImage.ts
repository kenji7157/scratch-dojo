import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

initStoryshots({
  test: imageSnapshot({
    getMatchOptions: (options) => {
      const { kind, story } = options.context;

      const dir = path.resolve(__dirname, '__image_snapshots__', kind);
      const name = story.replaceAll(/\s/g, '');

      return {
        customSnapshotsDir: path.resolve(dir),
        customSnapshotIdentifier: name,
      };
    },
  }),
});
