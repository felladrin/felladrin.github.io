export function replaceHtmlSlots(
  targetElement: Element,
  slotNameToNodeMap: { [slotName: string]: Node }
) {
  for (const slotName in slotNameToNodeMap) {
    targetElement
      .querySelector(`slot[name='${slotName}']`)
      .replaceWith(slotNameToNodeMap[slotName]);
  }
}
