import ProjectGallery from "@/components/ProjectGallery";
import PageBanner from "@/components/PageBanner";

const ProjectsPage = () => {
  return (
    <>
      <PageBanner title="Our Projects" breadcrumb="Projects" />
      <div className="py-12">
        <ProjectGallery hideHeader={true} />
      </div>
    </>
  );
};

export default ProjectsPage;
