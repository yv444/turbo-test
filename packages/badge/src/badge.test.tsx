import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import { Badge } from "./badge";

expect.extend(toHaveNoViolations);

const BADGE_TEXT = "BADGE_TEXT";

describe("Badge a11y tests", () => {
  test("bold brand should have no violations", async () => {
    const badge = render(
      <Badge role="brand" emphasis="bold">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle brand should have no violations", async () => {
    const badge = render(
      <Badge role="brand" emphasis="subtle">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold positive should have no violations", async () => {
    const badge = render(
      <Badge role="positive" emphasis="bold">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle positive should have no violations", async () => {
    const badge = render(
      <Badge role="positive" emphasis="subtle">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold negative should have no violations", async () => {
    const badge = render(
      <Badge role="negative" emphasis="bold">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle negative should have no violations", async () => {
    const badge = render(
      <Badge role="negative" emphasis="subtle">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold warning should have no violations", async () => {
    const badge = render(
      <Badge role="warning" emphasis="bold">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle warning should have no violations", async () => {
    const badge = render(
      <Badge role="warning" emphasis="subtle">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold info should have no violations", async () => {
    const badge = render(
      <Badge role="info" emphasis="bold">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle info should have no violations", async () => {
    const badge = render(
      <Badge role="info" emphasis="subtle">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold neutral should have no violations", async () => {
    const badge = render(
      <Badge role="neutral" emphasis="bold">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle neutral should have no violations", async () => {
    const badge = render(
      <Badge role="neutral" emphasis="subtle">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
});
