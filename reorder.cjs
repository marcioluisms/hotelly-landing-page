const fs = require('fs');

const content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const heroEnd = content.indexOf('        {/* Price Anchor & Loss Aversion */}');
const priceAnchorStart = heroEnd;
const salesStoryStart = content.indexOf('        {/* Sales Story */}');
const featuresStart = content.indexOf('        {/* Features (6 Pillars) */}');
const targetAudienceStart = content.indexOf('        {/* Target Audience */}');
const faqStart = content.indexOf('        {/* FAQ */}');

const part1 = content.slice(0, priceAnchorStart); // Up to end of Hero
const priceAnchor = content.slice(priceAnchorStart, salesStoryStart);
const salesStory = content.slice(salesStoryStart, featuresStart);
const features = content.slice(featuresStart, targetAudienceStart);
const targetAudienceToFaq = content.slice(targetAudienceStart, faqStart);
const faqToEnd = content.slice(faqStart);

const newContent = part1 + features + salesStory + targetAudienceToFaq + priceAnchor + faqToEnd;

fs.writeFileSync('src/pages/Home.tsx', newContent);
console.log('Done');
