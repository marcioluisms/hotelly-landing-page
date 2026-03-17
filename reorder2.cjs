const fs = require('fs');

const content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const targetAudienceStart = content.indexOf('        {/* Target Audience */}');
const socialProofStart = content.indexOf('        {/* Social Proof & Authority */}');
const pricingStart = content.indexOf('        {/* Pricing */}');

if (targetAudienceStart === -1 || socialProofStart === -1 || pricingStart === -1) {
  console.error('Could not find one of the sections');
  process.exit(1);
}

const beforeTargetAudience = content.slice(0, targetAudienceStart);
const targetAudience = content.slice(targetAudienceStart, socialProofStart);
const socialProof = content.slice(socialProofStart, pricingStart);
const afterPricing = content.slice(pricingStart);

const newContent = beforeTargetAudience + socialProof + targetAudience + afterPricing;

fs.writeFileSync('src/pages/Home.tsx', newContent);
console.log('Reordered successfully');
