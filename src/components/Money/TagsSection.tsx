import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Tag, useTags } from '../../hooks/useTags'

const Wrapper = styled.section`
  margin-top: 64px;
  flex-grow: 1;
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > ol {
    > li {
      font-size: 14px;
      display: inline-block;
      border: 1px solid #16b6ae;
      background: #fafafa;
      border-radius: 18px;
      padding: 3px 18px;
      margin-right: 12px;
      margin-top: 4px;
      color: #16b6ae;
      &.selected {
        background: #16b6ae;
        color: white;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid;
    color: #6ad0cb;
    margin-top: 14px;
    font-size: 14px;
  }
`

type Props = {
  value: number[]
  onChange: (tags: number[]) => void
  type: string
}

const TagsSection: React.FC<Props> = (props) => {
  const { tags: alltags, addTag } = useTags()
  const [tags, setTags] = useState<Tag[]>([])
  useEffect(() => {
    setTags(alltags.filter((i) => i.type === props.type))
  }, [alltags, props.type])
  const selectedTagIds = props.value
  const onChange = props.onChange

  const onToggleTags = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if (index >= 0) {
      onChange(selectedTagIds.filter((t) => t !== tagId))
    } else {
      onChange([...selectedTagIds, tagId])
    }
  }

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleTags(tag.id)
            }}
            className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={() => addTag(props.type)}>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection }
