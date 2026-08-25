console.log("Background script loaded");

browser.declarativeNetRequest.getEnabledRulesets()
  .then(rulesets => {
    console.log("Enabled rulesets:", rulesets);
  })
  .catch(error => {
    console.error("DNR error:", error);
  });