import { PropTypes } from 'react';

const personal = PropTypes.shape({
  preferredName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
});

const location = PropTypes.shape({
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
});

const profile = PropTypes.shape({
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});

const profileList = PropTypes.arrayOf(profile);

const education = PropTypes.shape({
  institution: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired,
});

const educationList = PropTypes.arrayOf(education);

const skill = PropTypes.shape({
  category: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const skillList = PropTypes.arrayOf(skill);

const project = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
});

const projectList = PropTypes.arrayOf(project);

const work = PropTypes.shape({
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  description: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
});

const workList = PropTypes.arrayOf(work);

const resume = PropTypes.shape({
  personal: personal.isRequired,
  location: location.isRequired,
  profiles: profileList,
  education: educationList,
  work: workList,
  skills: skillList,
  projects: projectList,
});

export default {
  resume,
  personal,
  location,
  education, educationList,
  profile, profileList,
  project, projectList,
  skill, skillList,
  work, workList,
};
