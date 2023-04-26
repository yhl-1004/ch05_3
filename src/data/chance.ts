import Chance from "chance";
const chance = new Chance();

export const ramdomUUID = () => chance.guid();
export const randomName = () => chance.name();
export const randomEmail = () => chance.email();
export const randomId = () => chance.fbid();
export const randomJobTitle = () => chance.profession();
export const randomCompanyName = () => chance.company();
export const randomSentence = (words = 5) => chance.sentence({ words });
export const randomTitleText = (words = 3) => chance.sentence({ words });
export const randomparagraphs = (sentences = 3) =>
  chance.paragraph({ sentences });
export const randomFirstName = () => chance.first();
export const randomLastName = () => chance.last();
export const randomAvartar = (): string => chance.avatar();
