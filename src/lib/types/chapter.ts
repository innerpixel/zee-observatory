export type FieldState = 'FIELD SEALED' | 'FIELD PARTIALLY OPEN' | 'FIELD OPEN TO REVISION' | 'FIELD OPEN WITH UNCERTAINTY';
export type StoryBlock = { type: 'paragraph' | 'quote' | 'field-weather'; text: string };
export interface FollowUp { text: string; state: FieldState; position: number; consequence: string }
export interface ChoicePath { id:string; label:string; spoken:string; fieldState:FieldState; zeeTranslation:string; position:number; intention:string; possibleExperience:string; changed:string; nextBurden:string; revisability:'NOT YET'|'POSSIBLY'|'YES'; revisionExplanation:string; consequence:{title:string; paragraphs:string[]}; resultImage:string; resultImageAlt:string; followUps:FollowUp[] }
export interface Perspective { id:string; index:string; kind:string; buttonLabel:string; fieldLabel:string; title:string; copy:string; note:string }
export interface ArchiveCard { title:string; teaser:string; image:string; imageAlt:string }
export interface Chapter { id:string; slug:string; title:string; chapterNumber:string; totalChapters?:number; transmissionNumber:string; durationLabel?:string; encounter:{timestamp:string; setting:string; title:string; image:string; imageAlt:string; imageCaption:string; blocks:StoryBlock[]; zeeQuestion:string}; choices:ChoicePath[]; perspectives:Perspective[]; caseStudy:{eyebrow:string; title:string; paragraphs:string[]}; audit:{visible:string; hidden:string; repair:string}; closingFieldNote:{text:string; signature:string}; archiveCard:ArchiveCard }
export type ChapterStatus='published'|'development';
export interface ChapterManifestEntry extends ArchiveCard { id:string; slug:string; status:ChapterStatus }
