/* eslint-disable jsx-a11y/aria-role -- known issue with component */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import { Badge } from "./badge";

expect.extend(toHaveNoViolations);

const BADGE_TEXT = "BADGE_TEXT";

describe("Badge a11y tests", () => {
  test("bold brand should have no violations", async () => {
    const badge = render(
      <Badge emphasis="bold" role="brand">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle brand should have no violations", async () => {
    const badge = render(
      <Badge emphasis="subtle" role="brand">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold positive should have no violations", async () => {
    const badge = render(
      <Badge emphasis="bold" role="positive">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle positive should have no violations", async () => {
    const badge = render(
      <Badge emphasis="subtle" role="positive">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold negative should have no violations", async () => {
    const badge = render(
      <Badge emphasis="bold" role="negative">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle negative should have no violations", async () => {
    const badge = render(
      <Badge emphasis="subtle" role="negative">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold warning should have no violations", async () => {
    const badge = render(
      <Badge emphasis="bold" role="warning">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle warning should have no violations", async () => {
    const badge = render(
      <Badge emphasis="subtle" role="warning">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold info should have no violations", async () => {
    const badge = render(
      <Badge emphasis="bold" role="info">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle info should have no violations", async () => {
    const badge = render(
      <Badge emphasis="subtle" role="info">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("bold neutral should have no violations", async () => {
    const badge = render(
      <Badge emphasis="bold" role="neutral">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
  test("subtle neutral should have no violations", async () => {
    const badge = render(
      <Badge emphasis="subtle" role="neutral">
        {BADGE_TEXT}
      </Badge>
    ).getByText(BADGE_TEXT);
    expect(await axe(badge)).toHaveNoViolations();
  });
});
