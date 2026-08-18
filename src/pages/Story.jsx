import StoryHero from '../sections/story/storyHero';
import StoryNomad from '../sections/story/StoryNomad';
import StoryValidation from '../sections/story/StoryValidation';

const Story = () => {
  return (
    <main>
      <StoryHero />
        <StoryNomad />
        <StoryValidation />
    </main>
  );
};

export default Story;