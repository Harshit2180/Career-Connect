import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfile from './UpdateProfile'
import { useSelector } from 'react-redux'

const isResume = true;
// const skills = ["HTML", "CSS", "JS", "React", "NodeJS"]

function Profile() {

    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth)

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-r-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEUDBAb///8AAAD8/Pzy8vKHh4f8/f/39/etrq7v7+8AAAPc3NwiIiPf3+AFBQrp6enR0dGenp5SU1S3t7dhYWJcXF1sbGx+fn7Hx8dmZme9vb1FRUUcHBwSEhKoqKhOTk51dXY0NDOQkJI6OzwrKyweHSMSEBczuwwEAAAO60lEQVR4nO1d65ajqhLWwmjUGGPnZq6dpHvP+z/iAQEjisgt3XOyptb+s3si8EndqcIgfCMKfnsBPukfmL+V/oH5W+nVYNDo/7yAXgsG9Zb/YjSv3pkYdSh+8WSvAoOXnqR5Pb9Ws/3tsNkcbvtZdZ3XeZqg/n55I79gyDIxiqioq90pAyllp11VF1FCf+t1es87g7ejfmz+sGVnwTIQaBlkDOKfQ1XjTfI7u08wSZRft81SgyUhvPg+GE4U0vaaR4nHBfgBgyUbRavHF0WiSc2Pvx6rCDUDeCA/YFCUV98GOARE9yqP/PCbDzBJdNyabMlwg7ZHL+zmDiYpq7M1khbPuSrd4biCiYqZI5IWz6yIfhVMlO+9QGFw9rkbHBcwSe5nVzpwZrkLs9mDQWXlFQqDU5X2ms0aTLpe+IZC4SzW6Q+DSfLDK6BQOAdbXrMDk1bBq7AQNEFltzk2YJLV9nVQKJztymZzLMCk85dIi4hmMbfYHCMwMfEHy33wYigNnGBf8hlfBIaw2Mert4WhgQ/Caq8Dg03++v4jUBo497WhQ2AABhEttvgxLBjNgmg1AxtqtDPl7PKDWDCay6w0WZ8JmPz2s1gImlvuH0yM1cpq8zOiL6CBzaqZ3C+Y8NWWUk4Ztp/aClqXzWKskn8eCiGsonX1sy4YvC+/gwWjwXvjFUz+e1gIGk0toAem2P0iFoxmV/gDU+5/Q/Y7YGCvZW+mwcTYVp5/FQtGc36UGm6axs4kP+rDjKGpNAKcaTDJ+vTrWDCa03oazTSYXzMwImFz4w4GK7Lst4EQyjRUmhoMCqNHT5HJj8O6J2P2C+6MIvvHRzQRD0zsTDLvBWPwvZ8pyUGLA7SjyMQUB2sTR20TYFafvVFhcUwjFZXW9hWgokOk0UqqcybFRg0GW8vBiJsJ1s0tlV8GD/7e84N8iCnbqQSTzCUWBvZK1kXoaGViM5glZFz8XzGCBbPFXKmflWAGTNaMCFfViChMHjZgyDuiz5e30efhU8loKjDpQ6qa4F6rdiZUrUaBJWX7HSmexqyoyg0qwKDj9wjrbgua0BrWWtA/mIsNbFM8Ink6mamehe+j4kUqwIz7/U+xKa/zLpX0z2htmPmAjyZiwcE+mqlVu9J0joNB89E0LMCcFfUk2/PiSed9I00xMbVGWE558xbwoNWEmYJgPr4142BUwSXcV2zI/NK1/kHFknZG1gZORKwbnq0mt1QVdo6CSa6qdwQfXBDX3Z/Bd03FJpabPflY342KIs/Np9lTpUxHwUwIMewTJjazjsoD+GAsnax1rQ0sa6ZNwvmIxhF/fxrdmjEweGOmXhBTZVE3RIDgRg2fttgAHMlOktzYmPbsPzG6NWNgcpm9FIb85vYr7/IGDglDikYvCQKwJmOQpGX9pQn/c2xrRsAk80lXHj64oySKzb2mf0U6YpNBRX+MwlwTC35mzKkZAVNohJdwa0ow8a+7HJUF2KQi+kKmVRNnmTjM9QPaVjD1wKC1RlSCrQ3LmCSC2Fz0rQ08+DtODYJzzJpyWyMHo+ddEbGhoxZ/BmKDN21yGJhxBR9tTKws3OShgBzMSk+vwql5sRhQ3f09fB3p1oRqsXmGJ2jM6R958Cx3nqVgokrXRtwwkmZzuu4hkACOiY3ircCtZX3TpAmOSbXBFFN6+bnsK2O0VBSbGWNqRWwDu1bDGucN4CRVATIwca09OJyZixgWgn5eVPy9jFkb7GNxKZ5wlCWUQS1L1srAlMqQoremE9dHx4HYNIut5WJDnEv6FjScS8njM1mQJgOTm5z1E2vTkBhVwSZXiU1rWjEWm5QB3GVegAQMOppsOwB3+9OBtWn+HEn2GRYtFi3nckAZyCJOCRjTyOrCrU0uis2VulwSsQG+FBSu73YpUJLe1AFTGEbwcOcvSRSbU80Ovfti01hwKjC6zuVwUpk+G4DBExgryh17tic2h4IeeqOrIBaNQ0bjB2xULVPTAHV/5TIwU5GMbOArbTYJy61obRLqvAnWhmRhianFAX/hUCEli2qGbGaRLIYF1S1xT2ywk0bNQVdsuPVuoNsf/cBu6J8NwRQWh37wRVNMCLvb3T+favrnsG59CpLGYyGqU80qLIZCMwRjLDJBcxLEnhZUITsgIizIxQbaOqVk53SELROaAZhE18kUhw4qVuFSiimBGbM2Cc17MEeZCNjN7Tg+kwjNAEw6PMXQQrNgFh+tRGsz59xLvHw45PwEwbl0TeLRDMCUuh5zf+wTs4NoLhEbTMcTqfDl6Wn3Mjw4DTTAAExhOQu0YpPO+mJD11/BZ5MHxSFo+HAvk4DLQAMMwKyszdjlyt/Hp2BWHtxJq+gmEXVg5ZCJlMEg3OyDSdb2ZuzOX5UoNpc54z/WbhqH/VNfy/kGvuYATAXL6XGklMGJ1SFjsemiwWLTTkvgrL98lBYsYVCB0geDlZktGFIlzvhIUIkZCfY5GgzmaO2Q9cDs++qsDwYrM2swXBGjgdhUHYaoLdVln5bw2VdnAzBfDmCwWzMiNut2gtxX3eoSvtRgENHMDmAy+GDOfc/afPIArvTWRLQkuhkpwDSa2QEMOdJgYVcqxjZtDvLhq8djOdTNIpg4Xrm9uCV8c/9FOK2CVvUgb+WeACvlzsQGKbOxKXA8SzlNGAqCI49tfNWvYb+5Z2h6YJAzmOApNlfR2vCTSz8mkwYBsRLM0YPPxKwNKntiUzA0nno9SLppCoyzQYM7V8SC2OAAhCegPVV8T4Ahx38eJmnTQKLYwJEf5/ixm4PjwN7OeAETwIaNh4RMDysqIZ6mB6+5AaNkM09gsJNGOUCsvmuC5ubvXsRmAowfNqNiQ23nSkhZwprrHx/6eYrNfCiAZp4PmpZBYS1UCbTa1DQHLJ1kWps5z0En2jDVharu6+EFCZqlJUqaVs3uRpPPNOMpW1FsaE4F/8v+4sgDkx6AuzvTznSI2AVG4pEz0HoxFKJPR47GYGLlzoSOjuZzogM/P8GhpSg2K+buFLbHGZ2RVGBQmLuFAO08m07gFAvlfURsqKaTFRrr02QIEDoGZy0WsbqluAlKgMbueHuc+tcngzMsrid3MFkTWKLOqGKB9LP0xSW1MRk2OyY0OJYT3/8WkVAXSJidvlOjc+0BmMmEhkuqiWOhpTMNBp4NQkLnCuFClg60T9NqpJockoB8pXdeuRXWC+CVGqUoNvSsGNs8+4MNjSSgswvQVppgA7wAvks9sYGu2FjPNJmetU+csxnOj3YkYkdIpUZIo+VFX2waKmzdGo3EufWRBlvk5YmFbgXtvsBgYlFsTgW3NrZnKBpHGqWLO9tkm+kac1bbB5eK+S9iXSAvsSBiYzeXxmGT5TEgHZ8cOFF/6XlYTsSG/A2JWWYmNuRf7NyaoTLzdUDL1of9/pgcjAmuMjs7w5x2Fa1NHtK4c2UjNloHtPauJsAWMc7pR8u0JANbm0CwNiW3NhZKZxgA+CpqEBY3qPGEy5VVcoodrFxsUGiRstUrarDsTcyId0HXPKhX5dYm7hU4sZQAshEbvXIT80IgioXWKSJpswrrR8Irvy56YoMs2UGvEMiq3gS/fJ6ST2TV6jBjsVosJJmwemWMr1PiLgyoVaJllziB+5FlyuSV943Y0NEPWRfNI2FWyNDawKdO8ZxxWWMz9PeaFJCh8X3llRpIFBuwFRtp17a84NRQU8KZ1mrHcTxqM3hNNhqKDbU2RmIDugWnxiET7ZujdYrjj/IkE0pEsWnbcOYGYqNdCmxUpB00BSW8I0DVqAYXkk0lPywOgrWZIcZpBo6UfpG2WfIsgz1vgFNftYPFhpWbHL+kYoO0NY9Ul7k2NjQD33ioP9ot3v6SaqA4rIZi02ysrthIdZlrywkZ95A0RVcaHUQZ9V+wCk/2orVJmcxdNVWPScuJbjNQgyWiLNI7+Jf/mIhNY44wQ/bEhu6unrUxagbSb4KHLVX3WEfpWCfs8zCWPN4FRpvL2nDGhzFq09JqoAvYMUwDRjMMerqH1TC2aXSIRmxj2ECnWXnwPG0JtRu7KLejMBEuGIRPfi/jPJvm1q1Ra6NO02nA6xTIC9WuH4Qzf6v5RyaIDS+FmBQ9MG06nW4HJo4yq/BDJj7v876V+t6zNpTSqSoB43ZgjagGvqmjjAyDBi69sdifBcCN0JQ3Zd6oPXkPBi+/xjZGX5HTVVesu7MnNluel1Y7aRYt9BOXGzSNS4i+yZVhlAiXNdXmoqdBTkHZ1CqxsbrcoM3iyYcMKsSbs4zj9+c1E8dv4c6qNS8XVOhSq2snlLsNvMMamXSLPx/f8TxOtejSd8H7CUatDWRWF4KormohVxFRLKVRh3U7ADvSCCPhppdrm0cY5XHLq1rCePQaCJoMb67VtksUw/nIW7xFYmIYRiOxDVGhVmDGrjfCypXoHdLpl9reZtYkpsb5ZcwFcbjeSH7xVOtfIdJPapuYhl063JfO3KiWWRv7i6fQyJVgB65Okv4Ve0ZoJu6SlImN05Vg8svaOBY0dRWRGsxCdYVUKBUbp8vaZNfonWp2jV5SuZVbY7FR3scXDedWM5nFBYen9hJC1+Yk2KmvSpz1wMBdzWRuV0+6YRGGklPv165XT/49l4Lq3HP8/3Nd65TAaIF5q4t0w8TqYgjPWDxdcRyHpYeuSlcsvi6ffqdrwQm904Xt73WV/nt95OCtPj/xax8GgRd8GOStPtnS0Lt8TIfSG33mCL3XB6je6NNgv/LRtheCeafP6VF6kw8dMnqnT1CGb/Vx0PC9PtsavtUHdTG906eOw7f6CDWhN/o8eAPnfT7cTigpq7MjHvz4uSpdGMwXGAwnOm7tE+nkye0xcofiBwzWbFFe3a3g4IfuVR7Za7Au+QGD/UEUrR53o5OO5sdfjxVBYuRPjpIfMJSSKL9uKZ4loSBY9tokl5woku0198JenHyCCUlFYFo/Dv+xL55lQR9MkGX03/47POp04ktfxuQbTFMTExV1tTtl8uOw7LSr6iJC7LYAn+QZTEt4rUma1/NrNdvfDpvN4bafVdd5nafJ8ONIvuhVYFpCHXr1XK8FI64/fjWcV+9MZ/mxSdbIil7OZj9J/8D8rfQPzN9KbwXmf1Kr3pLcsmR0AAAAAElFTkSuQmCC" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullName}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className='text-right' variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target="_blank" className='text-blue-500 w-full hover:underline cursor-pointer' href={user?.profile?.resume}>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <UpdateProfile open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile