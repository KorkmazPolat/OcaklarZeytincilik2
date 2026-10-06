import { test } from "node:test";
import assert from "node:assert/strict";
import { validateReleaseConfig } from "../scripts/release-config.mjs";
const valid = { NEXT_PUBLIC_SITE_URL: "https://magaza.test", NEXT_PUBLIC_WHATSAPP_NUMBER: "905321112233", NEXT_PUBLIC_CONTACT_PHONE: "+90 532 111 22 33", NEXT_PUBLIC_CONTACT_ADDRESS: "Test Mahallesi, Test Sokak No: 12", NEXT_PUBLIC_WORKING_HOURS: "09:00–18:00", NEXT_PUBLIC_MAP_LATITUDE: "40.443", NEXT_PUBLIC_MAP_LONGITUDE: "27.755", SITE_PREVIEW: "false" };
test("Release requires verified business configuration", () => {
  assert.deepEqual(validateReleaseConfig(valid), []);
  assert.ok(validateReleaseConfig({}).length >= 7);
  assert.ok(validateReleaseConfig({ ...valid, NEXT_PUBLIC_WHATSAPP_NUMBER: "905551234567" }).length);
});
test("Release rejects preview mode, invalid coordinates and unsafe origins", () => {
  for (const value of ["http://magaza.test", "https://localhost", "https://example.com", "https://u:p@magaza.test", "https://magaza.test/path", "https://magaza.test/?q=x"]) assert.ok(validateReleaseConfig({ ...valid, NEXT_PUBLIC_SITE_URL: value }).length);
  assert.ok(validateReleaseConfig({ ...valid, SITE_PREVIEW: "true" }).length);
  assert.ok(validateReleaseConfig({ ...valid, NEXT_PUBLIC_MAP_LATITUDE: "91" }).length);
  assert.ok(validateReleaseConfig({ ...valid, NEXT_PUBLIC_MAP_LONGITUDE: "NaN" }).length);
});
