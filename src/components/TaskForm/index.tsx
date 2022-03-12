import React, {
  FunctionComponent,
  ReactElement,
  useState,
  forwardRef,
  ForwardedRef,
  useEffect,
} from 'react'
import { useFormik, FormikProvider, Form } from 'formik'
import DatePicker from 'react-datepicker'
import { useQuery, useMutation } from '@apollo/client'
import moment from 'moment'
import * as Yup from 'yup'
import { useKanban } from '../../hooks'
import { getUsersQuery, createTaskMutation } from '../../graphql'
import {
  RootStyle,
  TitleInput,
  InputGrid,
  StyledInput,
  ButtonRow,
  StyledDropBox,
  DropBoxTitle,
  ListItem,
  InputWrapper,
  GridSpacer,
  CheckboxStyle,
} from './styles'
import { UserSvg, CalendarSvg, PointsSvg, TagsSvg } from '../../svg'
import { Button, Avatar } from '../index'
import { FormProps, UserProps, DateInputProps, TaskFormPorps } from './types'

import 'react-datepicker/dist/react-datepicker.css'

const TaskForm: FunctionComponent<TaskFormPorps> = ({ onCancel, initialValues }): ReactElement => {
  const [openEstimate, setOpenEstimate] = useState(false)
  const [openAssignee, setOpenAssignee] = useState(false)
  const [openTags, setOpenTags] = useState(false)
  const { setKanbanColumns } = useKanban()
  const [createTask, { data: taskData, loading: taskLoading }] = useMutation(createTaskMutation)

  const { data, loading } = useQuery(getUsersQuery)

  useEffect(() => {
    if (!taskLoading && taskData) {
      setKanbanColumns((prev) => ({
        ...prev,
        BACKLOG: {
          ...prev.BACKLOG,
          list: [...prev.BACKLOG.list, taskData.createTask],
        },
      }))
    }
  }, [taskData, taskLoading, setKanbanColumns])

  const taskValidationSchema = Yup.object().shape({
    pointEstimate: Yup.string().required(),
    assigneeId: Yup.string().required(),
    dueDate: Yup.date().required(),
    name: Yup.string().required(),
    status: Yup.string().required(),
    tags: Yup.array().of(Yup.string()).min(1).required(),
  })

  const formik = useFormik<FormProps>({
    enableReinitialize: false,
    initialValues: initialValues || {
      pointEstimate: '',
      assigneeId: '',
      dueDate: moment().format(),
      name: '',
      status: 'BACKLOG',
      tags: [],
    },
    validationSchema: taskValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (!initialValues) {
        // Create task
        createTask({ variables: values })
        onCancel()
      } else {
        // Edit task
      }
      setSubmitting(false)
    },
  })

  const { resetForm, handleSubmit, values, setFieldValue } = formik

  const estimateOptions = [
    {
      text: '0 Points',
      value: 'Zero',
    },
    {
      text: '1 Points',
      value: 'ONE',
    },
    {
      text: '2 Points',
      value: 'TWO',
    },
    {
      text: '4 Points',
      value: 'FOUR',
    },
    {
      text: '8 Points',
      value: 'EIGHT',
    },
  ]

  const tagOptions = ['ANDROID', 'IOS', 'NODE_JS', 'RAILS', 'REACT']

  const CustomDateInput = forwardRef(
    ({ value, onClick }: DateInputProps, ref: ForwardedRef<HTMLDivElement>) => (
      <InputWrapper onClick={onClick} ref={ref}>
        <CalendarSvg />
        {value}
      </InputWrapper>
    )
  )

  CustomDateInput.defaultProps = {
    value: undefined,
    onClick: undefined,
  }

  return (
    <FormikProvider value={formik}>
      <Form
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
        style={{ width: '100%', maxWidth: 572 }}
      >
        <RootStyle>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <TitleInput
            placeholder="Task Title"
            value={values.name}
            disabled={taskLoading}
            onChange={(e) => setFieldValue('name', e.target.value)}
          />
          <InputGrid>
            <StyledInput selected={values.pointEstimate !== ''}>
              <InputWrapper
                onClick={() => {
                  if (!taskLoading) {
                    setOpenEstimate((prev) => !prev)
                    setOpenAssignee(false)
                    setOpenTags(false)
                  }
                }}
              >
                <PointsSvg />
                {values.pointEstimate === ''
                  ? 'Estimate'
                  : estimateOptions.filter((item) => item.value === values.pointEstimate)[0].text}
              </InputWrapper>
              <StyledDropBox open={openEstimate} width={123}>
                <DropBoxTitle>Estimate</DropBoxTitle>
                <GridSpacer spacing={14}>
                  {estimateOptions.map((item) => (
                    <ListItem
                      key={item.value}
                      onClick={() => {
                        setFieldValue('pointEstimate', item.value)
                        setOpenEstimate(false)
                      }}
                    >
                      <PointsSvg />
                      {item.text}
                    </ListItem>
                  ))}
                </GridSpacer>
              </StyledDropBox>
            </StyledInput>
            <StyledInput selected={values.assigneeId !== ''}>
              <InputWrapper
                onClick={() => {
                  if (!taskLoading) {
                    setOpenAssignee((prev) => !prev)
                    setOpenEstimate(false)
                    setOpenTags(false)
                  }
                }}
              >
                {values.assigneeId === '' ? (
                  <>
                    <UserSvg />
                    Assignee
                  </>
                ) : (
                  !loading &&
                  data.users && (
                    <>
                      <Avatar
                        size={32}
                        src={
                          data.users.filter((item: UserProps) => item.id === values.assigneeId)[0]
                            .avatar
                        }
                      />
                      {
                        data.users
                          .filter((item: UserProps) => item.id === values.assigneeId)[0]
                          .fullName.split(' ')[0]
                      }
                    </>
                  )
                )}
              </InputWrapper>
              <StyledDropBox open={openAssignee} width={239}>
                <DropBoxTitle>Assign To...</DropBoxTitle>
                <GridSpacer spacing={24}>
                  {!loading &&
                    data.users &&
                    data.users.map((user: UserProps) => (
                      <ListItem
                        key={user.id}
                        onClick={() => {
                          setFieldValue('assigneeId', user.id)
                          setOpenAssignee(false)
                        }}
                      >
                        <Avatar src={user.avatar} />
                        {user.fullName.split(' ')[0]} {user.fullName.split(' ')[1]}
                      </ListItem>
                    ))}
                </GridSpacer>
              </StyledDropBox>
            </StyledInput>
            <StyledInput selected={false}>
              <InputWrapper
                onClick={() => {
                  if (!taskLoading) {
                    setOpenTags((prev) => !prev)
                    setOpenAssignee(false)
                    setOpenEstimate(false)
                  }
                }}
              >
                {values.tags.length ? (
                  values.tags[0]
                ) : (
                  <>
                    <TagsSvg />
                    Label
                  </>
                )}
              </InputWrapper>
              <StyledDropBox open={openTags} width={231}>
                <DropBoxTitle>Tag Title</DropBoxTitle>
                <GridSpacer spacing={15}>
                  {tagOptions.map((tag) => (
                    <ListItem key={tag}>
                      <CheckboxStyle
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFieldValue('tags', [...values.tags, tag])
                          } else {
                            setFieldValue(
                              'tags',
                              values.tags.filter((val) => val !== tag)
                            )
                          }
                        }}
                        id={`checkbox${tag}`}
                        type="checkbox"
                      />
                      <label htmlFor={`checkbox${tag}`}>{tag}</label>
                    </ListItem>
                  ))}
                </GridSpacer>
              </StyledDropBox>
            </StyledInput>
            <StyledInput
              selected={false}
              onClick={() => {
                if (!taskLoading) {
                  setOpenAssignee(false)
                  setOpenTags(false)
                  setOpenEstimate(false)
                }
              }}
            >
              <DatePicker
                selected={new Date(values.dueDate)}
                onChange={(date) => {
                  setFieldValue('dueDate', date)
                }}
                disabled={taskLoading}
                customInput={<CustomDateInput />}
              />
            </StyledInput>
          </InputGrid>
          <ButtonRow>
            <Button
              onClick={() => {
                resetForm()
                onCancel()
              }}
              disabled={taskLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              active
              disabled={Boolean(
                !(
                  values.pointEstimate &&
                  values.assigneeId &&
                  values.dueDate &&
                  values.name &&
                  values.status &&
                  values.tags.length
                )
              )}
            >
              Create
            </Button>
          </ButtonRow>
        </RootStyle>
      </Form>
    </FormikProvider>
  )
}

export default TaskForm
