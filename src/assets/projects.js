import { images } from './index';

const projectTitles = [
  'Green Park Residence A-12',
  'C-22 Shyam Vihar',
  'Block-A Green Park',
  'Sector 105 Noida',
  'Sector 100 Noida',
  'Sector 108 Noida',
  'Block-A Green Park',
  'Doctor Sharma Residence, Delhi',
  'Sector 100 Residence, Noida',
  'East Delhi Residence',
  'Official Residence, Najafgarh',
];

const projectCategories = [
  'architecture',
  'architecture',
  'architecture',
  'architecture',
  'architecture',
  'architecture',
  'residential',
  'architecture',
  'architecture',
  'architecture',
  'architecture',
];

export const projects = images.projects.map((image, index) => {
  const id = index + 1;
  return {
    id,
    image,
    number: String(id).padStart(2, '0'),
    category: projectCategories[index] || 'architecture',
    title: projectTitles[index] || `Project ${String(id).padStart(2, '0')}`,
    link: `/project/${id}`,
  };
});

export default projects;
