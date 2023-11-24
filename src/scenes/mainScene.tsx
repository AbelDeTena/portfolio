import { MainLayout } from "../layout";
import { Home, Skills, Projects, Contact } from "../pods";

export const MainScene: React.FC = () => {
  return (
    <MainLayout>
      <Home />
      <Skills /> 
      <Projects/>      
      <Contact/>
    </MainLayout>
  );
};
