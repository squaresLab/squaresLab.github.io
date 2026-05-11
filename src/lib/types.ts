export interface PublicationMaterials {
  pdf?: string;
  slidesPdf?: string;
  slidesPptx?: string;
  slidesKey?: string;
  slidesOdp?: string;
  posterPdf?: string;
}

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  year: number;
  month?: number;
  venue?: string;
  doi?: string;
  projects: string[];
  code?: string;
  data?: string;
  tool?: string;
  results?: string;
  website?: string;
  video?: string;
  materials: PublicationMaterials;
  formattedCitation: string;
  bibtex: string;
}
